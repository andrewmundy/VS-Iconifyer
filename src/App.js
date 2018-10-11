import React, { Component } from 'react';
import Red from './Components/Icon.js'
import './App.scss';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';
import download from './Assets/download.svg'
import reload from './Assets/reload.svg'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foreColor:[`rgba(83, 174, 233, 100`,`rgba(83, 174, 233, 100`],
      backColor:['#0169AA','#006EB4'],
      backPlate:['#3A383B','#272627'],
      displayFrontColorPicker: false,
      displayBackColorPicker: false,
      url:'',
      neon:"noDisplay",
      normal:"display"
    };
  }
  componentDidMount(){
    this.drawToSvg()
  }
  componentDidUpdate(){
    
  }

  original = () => {
    this.setState({
      foreColor:['#53AEE9','#047DCD'],
      backColor:['#0169AA','#006EB4'],
      backPlate:['#3A383B','#272627']
    })
  }
  handleFrontClick = () => {
    this.setState({ displayFrontColorPicker: !this.state.displayFrontColorPicker })
  };
  handleBackClick = () => {
    this.setState({ displayBackColorPicker: !this.state.displayBackColorPicker })
  };

  handleClose = async () => {
    this.drawToSvg()

    this.setState({ 
      displayFrontColorPicker: false,
      displayBackColorPicker: false
    })
  };

  neOn = () => {
    if(this.state.neon === "display"){
      this.setState({
        neon:"noDisplay",
        normal:"display"
      })
      this.drawToSvg()
    }else{
      console.log("helo")
      this.setState({
        neon:"display",
        normal:"noDisplay"
      })      
      this.drawToSvg()
    }
    
  }

  handleFrontChange = (color) => {
    this.setState({ 
      foreColor: [`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`],
      backColor: [`rgba(${color.rgb.r-45},${color.rgb.g-45},${color.rgb.b-45},${color.rgb.a})`,`rgba(${color.rgb.r-25},${color.rgb.g-25},${color.rgb.b-25},${color.rgb.a})`]  
    })
  };

  handleBackChange = (color) => {
    this.setState({ 
      backPlate: [`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,`rgba(${color.rgb.r-35},${color.rgb.g-35},${color.rgb.b-35},${color.rgb.a})`]
    })
  };
  
  drawToSvg = async () => {
    let svg = document.querySelector('svg');
    let img = document.getElementById('image');
    let canvas = document.querySelector('canvas');

    // get svg data
    var xml = new XMLSerializer().serializeToString(svg);
    // make it base64
    var svg64 = btoa(xml);
    var b64Start = 'data:image/svg+xml;base64,';
    // prepend a "header"
    var image64 = b64Start + svg64;

    // set it as the source of the img element
    img.src = image64;

    // draw the image onto the canvas
    canvas.getContext('2d').drawImage(img, 0, 0);
    this.setState({
      url:canvas.toDataURL('image/png',1.0)
    })
  }

  render() {
    const styles = reactCSS({
      'default': {
        foreColor: {
          width: '30px',
          margin:'0.2rem',
          height: '30px',
          borderWidth:'3px',
          borderRadius: '30px',
          background: this.state.foreColor[0],
          cursor:'pointer'
        },
        backPlate: {
          width: '30px',
          height: '30px',
          borderRadius: '30px',
          background: this.state.backPlate[0],
          cursor:'pointer'
        },
        popover: {
          // position: 'absolute',
          zIndex: '2',
          // left: '65vw'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <div className="App">
        <div id="content" className="content">
          <div className='icon'>
            <a href={this.state.url} target="blank" onClick={() => {this.drawToSvg()}}><img id="image" title="Copy this image and paste it as your new icon."/></a>
            <div style={{display:'none'}}>
            
            <Red
              neon={this.state.neon}
              normal={this.state.normal}
              foreColor={this.state.foreColor}
              backColor={this.state.backColor}
              backPlate={this.state.backPlate}
            />

            </div>
            <div className="tools">
              <div onClick={ this.handleFrontClick }>
                <div style={ styles.foreColor } />
              </div>
              <div onClick={ this.handleBackClick }>
                <div style={ styles.backPlate } />
              </div>
              
              <a id="imageLink" onClick={this.original}><img title="Restore to original" src={reload}/></a> 
              <a id="imageLink" target="_blank" href={this.state.url} download="vs_icon.icns" onClick={() => {this.drawToSvg()}}><img title="Download as a .icns" src={download}/></a>
            </div>

            { this.state.displayFrontColorPicker ? <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.foreColor[0] } onChange={ this.handleFrontChange } />
            </div> : null }

            { this.state.displayBackColorPicker ? <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.backPlate[0] } onChange={ this.handleBackChange } />
            </div> : null }

          </div>
        </div>
        <canvas style={{display:'none'}} id="canvas"  width="450px" height="450px"/>
      </div>
    );
  }
}

export default App;
