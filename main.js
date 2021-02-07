const clientId = "EvoV8s04XbCIgA8ZDYRdjpBTYWIhzmv_NBGC3cyFAFk";
const url = "https://api.unsplash.com/search/photos?query=";


const $input = $("#input");
const $grid = $("#grid");
const $button = $("#button");


const loadImg = async () => {
    const wallpaper = $input.val();
    const urlToFetch = `${url}${wallpaper}&per_page=25&client_id=${clientId}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const imageNodes = [];
            for (let i = 0; i < jsonResponse.results.length; i++) {
                imageNodes[i] = document.createElement("div");
                imageNodes[i].className = "img";
                imageNodes[i].style.backgroundImage = "url(" + jsonResponse.results[i].urls.raw + ")";
                imageNodes[i].addEventListener("click", function () {
                    window.open(jsonResponse.results[i].links.download, '_blank');
                })
                document.getElementById("grid").insertAdjacentElement("beforeend", imageNodes[i]);
            }
        }
    } catch (error) {
        console.log(error);
    }
};

// const executeSearch = () => {
//     $grid.forEach((img) => img.empty());
//     $input.empty();
//     loadImg();
//     return false;
// };

$button.click(loadImg);