import {useState, useEffect, Component} from "react";
import "./InputThemes.scss";


class InputTheme1 extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  } 
  render(){
    return(
      <div className="input_theme1_container">
        <div className="input_label">{this.props.label}</div>
        <input
          autoComplete='off'
          {...this.props.attrs}
        />
      </div>
    )
  }
}

class InputTheme2 extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  } 
  render(){
    return(
      <div className="input_theme2_container">
        {/* <div className="input_label">{this.props.label}</div> */}
        <input
          autoComplete='off'
          {...this.props.attrs}
        />
        <i className={"input_icon "+this.props.icon}></i>
      </div>
    )
  }
}

class InputTheme3 extends Component{
  constructor(props){
    super(props);
    this.state = {
      theme_class_name : "input_theme3_container"
    }
    // this.inputChange = this.inputChange.bind(this);
    this.inputFocusIn = this.inputFocusIn.bind(this);
    this.inputFocusOut = this.inputFocusOut.bind(this);
  } 

  // inputChange(e){
  //   console.log(e.target.value);
  // }

  inputFocusIn(e){
    this.setState({theme_class_name : "input_theme3_container input_theme3_SELECTED"});
  }

   inputFocusOut(e){
    if(e.target.value){
      return;
    }
    this.setState({theme_class_name : "input_theme3_container"});
  }
  render(){
    return(
      <div className={this.props.attrs.value?"input_theme3_container input_theme3_SELECTED" : this.state.theme_class_name}>
        <div className="input_label">{this.props.label}</div>
        <input 
          autoComplete="off"
          {...this.props.attrs}
          onFocus={this.inputFocusIn}
          onBlur={this.inputFocusOut}
          />
      </div>
    )
  }
}

class InputTheme4 extends Component{
  constructor(props){
    super(props);
    this.state = {
      theme_class_name : "input_theme4_container"
    }
    this.inputFocusIn = this.inputFocusIn.bind(this);
    this.inputFocusOut = this.inputFocusOut.bind(this);
  } 

  inputFocusIn(e){
    this.setState({theme_class_name : "input_theme4_container input_theme4_SELECTED"});
  }

   inputFocusOut(e){
    if(e.target.value){
      return;
    }
    this.setState({theme_class_name : "input_theme4_container"});
  }
  render(){
    return(
      <div className={this.props.attrs.value?"input_theme4_container input_theme4_SELECTED" : this.state.theme_class_name}>
        <div className="input_label">{this.props.label}</div>
        <input
          autoComplete='off'
          {...this.props.attrs}
           onFocus={this.inputFocusIn}
           onBlur={this.inputFocusOut}
        />
      </div>
    )
  }
}

// const InputTheme3 = (props) => {
//   const [theme_class_name, setThemeClass] = useState(); 
//   // console.log(props.value);
//   // const inputOnChange = (e) => { 
//   //   setValue(e.target.value);
//   //   props.parentCallback(e.target.value);
//   //   // console.log(value);
//   // }
//   useEffect(() => {
//     if(props.value){
//       console.log("kerii");
//       setThemeClass("input_theme3_container input_theme3_SELECTED");
//     }
//   }); 

//   const inputChange = (e) => {
//     console.log(e.target.value);
//   }

//   const inputFocusIn = (e) =>{
//     setThemeClass("input_theme3_container input_theme3_SELECTED");
//   }

//    const inputFocusOut = (e) =>{
//     if(e.target.value){
//       return;
//     }
//     setThemeClass("input_theme3_container");
//   }

//   return(
//     <div className={theme_class_name}>
//       <div className="input_label">{props.label}</div>
//       <input name=""  
//         value={props.value} 
//         onChange={e => { props.onChange(e);inputChange(e);}}  
//         autoComplete="off"
//         onFocus={inputFocusIn}
//         onBlur={inputFocusOut}
//         />
//     </div>
//     )
// }


class TextAreaTheme3 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={this.props.attrs.value?"textarea_theme3_container textarea_theme3_NOTNULL":"textarea_theme3_container"}>
        <div className="textarea_label" >{this.props.label}</div>
        <textarea 
          {...this.props.attrs}
        />
      </div>
    )
  }
}

class SearchBarTheme1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={"search_bar_theme1 "+(this.props.className??"")}>
        <i className="search_icon fas fa-search"></i>
        <input {...this.props.attrs}/>
      </div>
    )
  }
}
export {
  InputTheme1,
  InputTheme2,
  InputTheme3,
  InputTheme4,
  TextAreaTheme3,
  SearchBarTheme1
};