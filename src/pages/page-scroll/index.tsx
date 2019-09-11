import styles from './index.less';
import React, { useEffect } from 'react';
import { render } from 'react-dom';

const App = function() {
  useEffect(() => {
    // 这种方法会禁止所有元素的 touchmove，让本来需要滚动的也不能滚动了
    // document.body.addEventListener(
    //   'touchmove',
    //   function(e) {
    //     e.preventDefault()
    //   },
    //   { passive: false }
    // )

    // 让指定的元素可以滚动
    let overscroll = function(el: any) {
      el.addEventListener('touchstart', function() {
        let top = el.scrollTop;
        let totalScroll = el.scrollHeight;
        let currentScroll = top + el.offsetHeight;
        //If we're at the top or the bottom of the containers
        //scroll, push up or down one pixel.
        //
        //this prevents the scroll from "passing through" to
        //the body.
        if (top === 0) {
          el.scrollTop = 1;
        } else if (currentScroll === totalScroll) {
          el.scrollTop = top - 1;
        }
      });
      el.addEventListener('touchmove', function(evt: any) {
        //if the content is actually scrollable, i.e. the content is long enough
        //that scrolling can occur
        if (el.offsetHeight < el.scrollHeight) evt._isScroller = true;
      });
    };
    overscroll(document.querySelector('#root'));
    document.body.addEventListener(
      'touchmove',
      function(evt: any) {
        console.log(evt._isScroller);
        //In this case, the default behavior is scrolling the body, which
        //would result in an overflow.  Since we don't want that, we preventDefault.
        if (!evt._isScroller) {
          evt.preventDefault();
        }
      },
      { passive: false },
    );
  }, []);
  return (
    <div className={styles.normal}>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
      <h1>Page forbid-page-scroll</h1>
    </div>
  );
};

render(<App />, document.getElementById('root'));
