import React,{useContext} from 'react'
import {ThemeContext} from '../Contexts/ThemeContext'

 function PageProvider(props) {

    const {isDark} =useContext(ThemeContext)
    console.log(isDark)

    const styles={

        backgroundColor: isDark ? 'white':'#9a9a9a',
        height:'100vh',
        width:'100vw'
    }
    return (
        
        <div style={styles}>
            {props.children}
        </div>
    )
}
export default PageProvider



{/* <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    /> */}
