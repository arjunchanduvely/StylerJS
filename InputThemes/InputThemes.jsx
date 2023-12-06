import {useState, useEffect, Component} from "react";
import "./InputThemes.scss";


const InputTheme1 = (props) => {
  return(
    <div className="input_theme1_container">
      {/* <div>boo</div> */}
      <input
        autoComplete='off'
        placeholder=""
        {...props.attrs}
      />
      <div className="input_label">{props.label}</div>
      <div className="error_message">{props.errorMessage}</div>
    </div>
  )
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

const InputTheme3 = (props) => {
  return (
    <div className="input_theme3_container">
      <input
        autoComplete="off"
        placeholder=""
        {...props.attrs}
      />
      <div className="input_label">{props.label}</div>
      <div className="error_message">{props.errorMessage}</div>
    </div>
  );
};

const InputTheme4 = (props) => {
  return(
    <div className="input_theme4_container">
      <input
        autoComplete='off'
        placeholder=""
        {...props.attrs}
      />
      <div className="input_label">{props.label}</div>
      <div className="error_message">{props.errorMessage}</div>
    </div>
  )
}

const InputTheme5 = (props) => {
  return(
    <div className="input_theme5_container">
      {/* <div>boo</div> */}
      <input
        autoComplete='off'
        placeholder=""
        {...props.attrs}
      />
      <div className="input_label">{props.label}</div>
      <div className="error_message">{props.errorMessage}</div>
    </div>
  )
}

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
  InputTheme5,
  TextAreaTheme3,
  SearchBarTheme1
};