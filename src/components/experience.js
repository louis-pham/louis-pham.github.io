import { FaRegCalendar, FaMapPin } from "react-icons/fa6"

export default function Experience(props) {
  const iconStyle = { display: "inline", verticalAlign: "-7%" }
  const isActive = props.active ? "bg-sky-100" : "bg-stone-50"
  return <section className={`${isActive} py-3 px-5 mb-2 rounded-md`}>
    <div className="flex justify-between">
      <h3 className="flex-1 text-lg font-semibold">{props.header}</h3>
      <div className="flex gap-x-3 flex-wrap justify-end content-center text-sm font-light text-sky-900">
        <span><FaMapPin style={iconStyle} /> {props.location}</span>
        <span><FaRegCalendar style={iconStyle} /> {props.timeline}</span>
      </div>
    </div>
    <h4 className="mb-2 flex-1 text-md font-normal">{props.position}</h4>
    {props.children}
    { props.blurb && <p className="mt-2 text-sm font-extralight py-1 text-black/[0.55]">
      {props.blurb}
    </p> }
  </section>
}