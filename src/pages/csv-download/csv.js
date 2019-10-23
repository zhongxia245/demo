class CSV {
  constructor(filename, data, columns) {
    this.data = data;
    this.filename = filename;
    this.columns = columns || [];
  }

  /**
   * 生成 csv 字符串
   */
  generatorCsv() {
    let dataStr = '';
    let columns = this.columns || data[0];
    for (let i = 0; i < columns.length; i++) {
      dataStr += `${columns[i].title},`;
    }
    dataStr += '\n';

    let data = this.data || [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        dataStr += `${data[i][columns[j].key]},`;
      }
      dataStr += '\n';
    }

    return encodeURIComponent(dataStr);
  }

  /**
   * 下载 csv 文件
   * @param removeWait 超链接标签移出得等待时间，默认 2000ms
   */
  download(removeWait = 2000) {
    let link = document.createElement('a');
    link.download = `${this.filename}.csv`;
    link.href = `data:text/csv;charset=utf-8,${this.generatorCsv()}`;
    document.body.append(link);
    link.click();
    setTimeout(() => {
      link.parentNode.removeChild(link);
    }, removeWait);
  }
}

export default CSV;
