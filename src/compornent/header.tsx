export default function header() {
    return (
        <div className="header text-right border border-black bg-white h-10%">
            {localStorage.getItem("username")}さんこんにちわ
        </div>
    )
}