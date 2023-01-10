import Image from "../../Atoms/Image";
function ImagesGrid() {
    let i: number = 0;
    function generateImage() {
        let url: string = `https://source.unsplash.com/random/?sig=${i++}`;
        return <Image url={url} />;
    }
    let arr = [];
    for (let i = 0; i < 9; ++i) arr.push(generateImage());

    return (
        <div>
            <div className="grid">
                {arr.map((item) => {
                    return item;
                })}
            </div>
        </div>
    );
}

export default ImagesGrid;
