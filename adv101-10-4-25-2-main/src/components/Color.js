
export default function Color ({ color, fontSize, buttonClicked }) {

    return (
        <div 
            onClick={buttonClicked}
            style={{background: color, fontSize: fontSize}}
            className="text-white p-1 w-fit rounded-[8px] px-3"
        >
            {color}
        </div>
    )
}