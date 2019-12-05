import { useState, useEffect, useRef } from 'react';
import { ios } from 'is_js';
import throttle from 'lodash/throttle';
import './FixTop.less';

/**
 * 滚动置顶的组件
 * @param {int} top [可选] 距离顶部多少距离则吸顶
 * @param {string} className [可选]自定义样式
 * @param {function | null} renderFixed [可选] 置顶的展示内容和正常展示不一样时，可以设置这个参数
 *
 * @example
 * <FixTopComp>
 *   <div>这里的内容需要指定</div>
 * </FixTopComp>
 */
export default function FixTopComp({ children, top = 0, className = '', renderFixed = null }) {
  // 置顶内容和未置顶时不一样的话，则不能使用sticky
  // sticky 无法判断什么时候指定了，无法改变置顶的样式
  const useSticky = !renderFixed && ios();

  const domReference = useRef(null);
  let [fixed, setFixed] = useState(false);

  function handleScroll() {
    if (domReference && domReference.current) {
      let referenceTop = domReference.current.getBoundingClientRect().top;
      if (referenceTop <= top) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  }
  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    if (!useSticky) {
      if (typeof IntersectionObserver !== 'function') {
        new IntersectionObserver(
          entries => {
            let item = entries[0];
            if (!item.isIntersecting) {
              setFixed(true);
            } else {
              setFixed(false);
            }
          },
          { rootMargin: `-${top}px 0px 0px 0px` }, // 距离顶部还有 top px的时候，则开始置顶
        ).observe(domReference.current);
      } else {
        window.addEventListener('scroll', throttleScroll);
      }
    }
    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  if (useSticky) {
    return (
      <div className={`comp-fixtop ios-fixed ${className}`} style={{ top: `${top}px` }}>
        <div className="comp-fixtop-content">{children}</div>
      </div>
    );
  } else {
    return (
      <div className={`comp-fixtop ${className}`}>
        <div ref={domReference} className="comp-fixtop-reference"></div>
        <div className="comp-fixtop-content">{children}</div>
        <div
          className="comp-fixtop-content fixed"
          style={{ display: fixed ? 'block' : 'none', top: `${top}px` }}
        >
          {renderFixed ? renderFixed() : children}
        </div>
      </div>
    );
  }
}
