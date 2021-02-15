window.addEventListener('load',function(){
    let imgSrcs = ['./assets/gallery/1.JPG','./assets/gallery/2.JPG','./assets/gallery/4.JPG','./assets/gallery/5.JPG',
        './assets/gallery/6.JPG','./assets/gallery/7.JPG','./assets/gallery/8.JPG','./assets/gallery/10.JPG','./assets/gallery/11.JPG'];
    let interval = 1000;
    let viewer = document.getElementById('viewer');
    let current = 0;
    let len = imgSrcs.length;
    let setImage = function(){
        viewer.src = imgSrcs[current];
        current = ++current>len-1? 0 : current;
    };
    setImage();
    setInterval(setImage,interval);
});