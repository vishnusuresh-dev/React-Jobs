import ClipLoader from "react-spinners/ClipLoader"

const css = {
  "display" : "block",
  "margin" : "30vh auto"
}
const Spinner = () => {
  return(
    <ClipLoader 
    color="rgba(70, 51, 180, 1)"
    size={70}
    cssOverride={css}
    />
  )
}

export default Spinner
