export const ButtonWarning = ({label,to,text})=>{
    return <div>
        <div className="mt-4 text-sm text-gray-600">
          {label} <a href={to} className="text-blue-600 hover:underline">{text}</a>
        </div>
    </div>
}