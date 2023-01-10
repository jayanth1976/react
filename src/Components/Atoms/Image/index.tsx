export interface Props {
    url: string;
    css?:{}
}

function Image(props: Props) {
    return (
        <div className="image-div" style={props.css}>
            <img className="image card" src={props.url} alt="" />
            <div className="overlay card">An Image</div>
        </div>
    );
}
export default Image;
