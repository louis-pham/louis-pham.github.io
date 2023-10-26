import { FaRegCalendar, FaMapPin } from "react-icons/fa6"

export default function Experience(props) {
  const iconStyle = { display: "inline", verticalAlign: "-7%" }
  const isActive = props.active ? "bg-sky-100" : "bg-stone-50"
  return <section className={`${isActive} py-3 px-5 mb-2 rounded-md`}>
    <div className="flex justify-between items-center gap-x-2">
      <h3 className="flex-auto text-lg font-semibold">{props.header}</h3>
      <div className={`gap-x-3 text-sm font-light ${props.active ? "text-sky-800" : "text-slate-500"}`}>
        <p className="whitespace-nowrap overflow-hidden"><FaMapPin style={iconStyle} /> {props.location}</p>
        <p className="whitespace-nowrap overflow-hidden"><FaRegCalendar style={iconStyle} /> {props.timeline}</p>
      </div>
    </div>
    <h4 className="mb-2 flex-1 text-md font-normal">{props.position}</h4>
    {props.children}
    { props.blurb && <p className="mt-2 text-sm font-extralight py-1 text-black/[0.55]">
      {props.blurb}
    </p> }
  </section>
}