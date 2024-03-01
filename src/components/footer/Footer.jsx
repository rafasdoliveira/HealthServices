import "./footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="logoIccFooter">
                <img srcSet="/image/icc.svg" alt=""/>
            </div>
            <div className="lines">
                <div className="line_green"></div>
                <div className="line_blue"></div>
            </div>
        </footer>
    )
}