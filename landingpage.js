const imagePaths = [
    "L1030908000.jpg",
    "L1030908001.jpg",
    "L1030908002.jpg",
    "L1030908003.jpg",
    "L1030908004.jpg",
    "L1030908005.jpg",
    "L1030908006.jpg",
    "L1030908007.jpg",
    "L1030908008.jpg",
    "L1030908009.jpg",
    "L1030908010.jpg",
    "L1030908011.jpg",
    "L1030908012.jpg",
    "L1030908013.jpg",
    "L1030908014.jpg",
    "L1030908015.jpg",
    "L1030908016.jpg",
    "L1030908017.jpg",
    "L1030908018.jpg",
    "L1030908019.jpg",
    "L1030908020.jpg",
    "L1030908021.jpg",
    "L1030908022.jpg",
    "L1030908023.jpg",
    "L1030908024.jpg",
    "L1030908025.jpg",
    "L1030908026.jpg",
    "L1030908027.jpg",
    "L1030908028.jpg",
    "L1030908029.jpg",
    "L1030908030.jpg",
    "L1030908031.jpg",
    "L1030908032.jpg",
    "L1030908033.jpg",
    "L1030908034.jpg",
    "L1030908035.jpg",
    "L1030908036.jpg",
    "L1030908037.jpg",
    "L1030908038.jpg",
    "L1030908039.jpg",
    "L1030908040.jpg",
    "L1030908041.jpg",
    "L1030908042.jpg",
    "L1030908043.jpg",
    "L1030908044.jpg",
    "L1030908045.jpg",
    "L1030908046.jpg",
    "L1030908047.jpg",
    "L1030908048.jpg",
    "L1030908049.jpg",
    "L1030908050.jpg",
    "L1030908051.jpg",
    "L1030908052.jpg",
    "L1030908053.jpg",
    "L1030908054.jpg",
    "L1030908055.jpg",
    "L1030908056.jpg",
    "L1030908057.jpg",
    "L1030908058.jpg",
    "L1030908059.jpg",
    "L1030908060.jpg",
    "L1030908061.jpg",
    "L1030908062.jpg",
    "L1030908063.jpg",
    "L1030908064.jpg",
    "L1030908065.jpg",
    "L1030908066.jpg",
    "L1030908067.jpg",
    "L1030908068.jpg",
    "L1030908069.jpg",
    "L1030908070.jpg",
    "L1030908071.jpg",
    "L1030908072.jpg",
    "L1030908073.jpg",
    "L1030908074.jpg",
    "L1030908075.jpg",
    "L1030908076.jpg",
    "L1030908077.jpg",
    "L1030908078.jpg",
    "L1030908079.jpg",
    "L1030908080.jpg",
    "L1030908081.jpg",
    "L1030908082.jpg",
    "L1030908083.jpg",
    "L1030908084.jpg",
    "L1030908085.jpg",
    "L1030908086.jpg",
    "L1030908087.jpg",
    "L1030908088.jpg",
    "L1030908089.jpg",
    "L1030908090.jpg",
    "L1030908091.jpg",
    "L1030908092.jpg",
    "L1030908093.jpg",
    "L1030908094.jpg",
    "L1030908095.jpg",
    "L1030908096.jpg",
    "L1030908097.jpg",
    "L1030908098.jpg",
    "L1030908099.jpg",
    "L1030908100.jpg",
    "L1030908101.jpg",
    "L1030908102.jpg",
    "L1030908103.jpg",
    "L1030908104.jpg",
    "L1030908105.jpg",
    "L1030908106.jpg",
    "L1030908107.jpg",
    "L1030908108.jpg",
    "L1030908109.jpg",
    "L1030908110.jpg",
    "L1030908111.jpg",
    "L1030908112.jpg",
    "L1030908113.jpg",
    "L1030908114.jpg",
    "L1030908115.jpg",
    "L1030908116.jpg",
    "L1030908117.jpg",
    "L1030908118.jpg",
    "L1030908120.jpg",
    "L1030908121.jpg",
    "L1030908122.jpg",
    "L1030908123.jpg",
    "L1030908124.jpg",
    "L1030908125.jpg",
    "L1030908126.jpg",
    "L1030908127.jpg",
    "L1030908128.jpg",
    "L1030908129.jpg",
    "L1030908130.jpg",
    "L1030908131.jpg",
    "L1030908132.jpg",
    "L1030908133.jpg",
    "L1030908134.jpg",
    "L1030908135.jpg",
    "L1030908136.jpg",
    "L1030908137.jpg",
    "L1030908138.jpg",
    "L1030908139.jpg",
    "L1030908140.jpg",
    "L1030908141.jpg",
    "L1030908142.jpg",
    "L1030908143.jpg",
    "L1030908144.jpg",
    "L1030908145.jpg",
    "L1030908146.jpg",
    "L1030908147.jpg",
    "L1030908148.jpg",
    "L1030908149.jpg",
    "L1030908150.jpg",
    "L1030908151.jpg",
    "L1030908152.jpg",
    "L1030908153.jpg",
    "L1030908154.jpg",
    "L1030908155.jpg",
    "L1030908156.jpg",
    "L1030908157.jpg",
    "L1030908158.jpg",
    "L1030908159.jpg",
    "L1030908160.jpg",
    "L1030908161.jpg",
    "L1030908162.jpg",
    "L1030908163.jpg",
    "L1030908164.jpg",
    "L1030908165.jpg",
    "L1030908166.jpg",
    "L1030908167.jpg",
    "L1030908168.jpg",
    "L1030908169.jpg",
    "L1030908170.jpg",
    "L1030908171.jpg",
    "L1030908172.jpg",
    "L1030908173.jpg",
    "L1030908174.jpg",
    "L1030908175.jpg",
    "L1030908176.jpg",
    "L1030908177.jpg",
    "L1030908178.jpg",
    "L1030908179.jpg",
    "L1030908180.jpg",
    "L1030908181.jpg",
    "L1030908182.jpg",
    "L1030908183.jpg",
    "L1030908184.jpg",
    "L1030908185.jpg",
    "L1030908186.jpg",
    "L1030908187.jpg",
    "L1030908188.jpg",
    "L1030908189.jpg",
    "L1030908190.jpg",
    "L1030908191.jpg",
    "L1030908192.jpg",
    "L1030908193.jpg",
    "L1030908194.jpg",
    "L1030908195.jpg",
    "L1030908196.jpg",
    "L1030908197.jpg",
    "L1030908198.jpg",
    "L1030908199.jpg",
    "L1030908200.jpg",
    "L1030908201.jpg",
    "L1030908202.jpg",
    "L1030908203.jpg",
    "L1030908204.jpg",
    "L1030908205.jpg",
    "L1030908206.jpg",
    "L1030908207.jpg",
    "L1030908208.jpg",
    "L1030908209.jpg",
    "L1030908210.jpg",
    "L1030908211.jpg",
    "L1030908212.jpg",
    "L1030908213.jpg",
    "L1030908214.jpg",
    "L1030908215.jpg",
    "L1030908216.jpg",
    "L1030908217.jpg",
    "L1030908218.jpg",
    "L1030908219.jpg",
    "L1030908220.jpg",
    "L1030908221.jpg",
    // Add more TIFF image paths as needed
];

let currentIndex = 0;

// Preload images
const imageElements = [];
for (let i = 0; i < imagePaths.length; i++) {
    const img = new Image();
    img.src = imagePaths[i];
    imageElements.push(img);
}

function changeBackground() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.style.opacity = '1'; // Fade out
    setTimeout(() => {
        imageContainer.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
        currentIndex = (currentIndex + 2) % imagePaths.length;
        imageContainer.style.opacity = '1'; // Fade in
    },  25); // Change image after 1 second
}

// Change background image every second
setInterval(changeBackground, 25);

