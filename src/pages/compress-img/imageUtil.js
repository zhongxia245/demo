export default {
  // 图片文件转 base64
  compressFile(file, scale = 1, cb = () => {}) {
    const reader = new FileReader();
    const img = new Image();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    reader.onload = function(e) {
      img.src = e.target.result;
    };

    img.onload = function() {
      let originWidth = this.width;
      let originHeight = this.height;

      console.log(`图片尺寸: ${originWidth} x ${originHeight}`);

      let targetWidth = originWidth * scale;
      let targetHeight = originHeight * scale;

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      context.clearRect(0, 0, targetWidth, targetHeight);
      context.drawImage(img, 0, 0, targetWidth, targetHeight);

      canvas.toBlob(blob => {
        cb && cb(blob, img);
      });
    };
    reader.readAsDataURL(file);
  },
  // 图片文件转二进制文件
  file2Bolb() {},
  // base64转二进制文件
  base642Bolb() {},
  img2base64() {},
  img2Bolb() {},
};
