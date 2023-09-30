export default function PhotoAlbum(props) {
  return <div className="mt-6 rounded-md overflow-hidden square-container">
    <img className="content" src="/about-me/rubberduck.jpeg" width={150} height={150} alt="" />
    <img className="content" src="/about-me/cne.jpeg" width={150} height={150} alt="" />
    <img className="content" src="/about-me/shibuya.jpeg" width={150} height={150} alt="" />
    <img className="content" src="/about-me/boarding2.jpeg" width={150} height={150} alt="" />
    <img className="content" src="/about-me/checker.jpeg" width={150} height={150} alt="" />
    <img className="content" src="/about-me/warehouse.jpeg" width={150} height={150} alt="" />
    <div id="special-clip" className="content" style={{ position: "relative", overflow: "hidden", gridColumn: "span 2 / span 2" }}>
      <video autoPlay loop muted>
        <source src="/about-me/dance.mp4" />
      </video>
    </div>
  </div>
}