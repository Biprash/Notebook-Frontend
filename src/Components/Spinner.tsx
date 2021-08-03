import { ReactElement } from 'react'

const mystyles = {
    borderTopColor: 'transparent'
} as React.CSSProperties;

function Spinner(): ReactElement {
    return (
        <div className="flex justify-center items-center z-10 h-screen">
        <div style={mystyles} className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
      </div>
    )
}

export default Spinner
