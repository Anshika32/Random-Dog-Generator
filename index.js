let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImages();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    sound1();
});

async function getImages() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        console.log("Error - ", e)
        return "No Image Found!!";
    }
}

function sound1() {
    let audio1 = new Audio("sound1.mp3");
    audio1.play();
}