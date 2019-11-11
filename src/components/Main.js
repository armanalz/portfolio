import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

class Main extends Component {
    
    state = {
       
        hovered1:false,
        hovered2:false,
        hovered3:false,
        clicked:false,
        popupVisible:false,
        resize: false
    }

    componentDidMount() {

        window.addEventListener('resize',this.resizeHandler);

    }

    resizeHandler = () => {

        this.setState({

            resize:true
          
        })

    }


    mouseOverHandler1 = () => {

       this.setState({

           hovered1:true
         
       })
    }

    mouseOverHandler2 = () => {

        this.setState({

            hovered2:true
            
        })       
    }

    mouseOverHandler3 = () => {

        this.setState({

            hovered3:true
           
        })          
    }

    mouseLeaveHandler1 = () => {
         
        this.setState({

           hovered1:false

       }) 

    }

    mouseLeaveHandler2 = () => {

        this.setState({

           hovered2:false

       }) 
    }

    mouseLeaveHandler3 = () => {

        this.setState({

           hovered3:false
           
       }) 
    }

    handleClick() {

            if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
            } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
            }
        
            this.setState(prevState => ({

            popupVisible: !prevState.popupVisible,
            
            }));

    }
      
    handleOutsideClick = () => {

            // ignore clicks on the component itself
            if(this.state.clicked) {
            
            this.setState(prevState => ({
                clicked: !prevState.clicked,
            }));
            return;
            }
            
            this.handleClick();
    }

    render() {

       let homeClass = ""
       let contactClass = ""
       const winwidth=window.innerWidth
       
       if (this.state.hovered1 && this.state.hovered2 && winwidth > 1200) {

               homeClass = "home-hovered2"
               contactClass = "contact-hovered2"
         
       }else if(this.state.hovered1 && winwidth > 1200) {

               homeClass = "home-hovered1"

       }else if(this.state.hovered2 && winwidth > 1200) {

               homeClass = "home-hovered2"
               contactClass = "contact-hovered2"

       }else if(this.state.hovered3 && winwidth > 1200) {
          
               homeClass = "home-hovered2"
               contactClass = "contact-hovered2"

      }else if(this.state.popupVisible && winwidth < 1200) {

               homeClass = "home-visible"
               contactClass = "contact-visible"

      }else if (this.state.resize) {

               homeClass = ""
               contactClass = ""

      }

        return (

            <div className="main_wrapper">

                  <div className="blog_wrapper">     
                         <div className="blog_wrapper--link" 
                                 onMouseOver={()=>this.mouseOverHandler3()}
                                 onMouseLeave={()=>this.mouseLeaveHandler3()}
                                 onClick={()=>{this.setState({clicked:true})}}
                         >
                            <p style={{zIndex:"10"}}>
                                  Blog
                            </p>
                         </div>
                  </div>

                  <div className={`contact_wrapper ${contactClass}`}>
                            <div className="contact_wrapper--link"
                                 onMouseOver={()=>this.mouseOverHandler2()}
                                 onMouseLeave={()=>this.mouseLeaveHandler2()}
                                 onClick={()=>{this.setState({clicked:true})}}
                            >
                                <p>
                                    Contact
                                </p>
                            </div>
                  </div>

                  <div className={`home_wrapper ${homeClass}`} >

                        <div className="home_wrapper--link" 
                             onMouseOver={()=>this.mouseOverHandler1() }
                             onMouseLeave={()=>this.mouseLeaveHandler1()}
                        >
                   
                            <div className="home_wrapper--link-icon"
                                 onClick={()=>this.handleClick()}
                            >                              
                               
                                    <MenuIcon id="menu-icon"/>                               
                                
                            </div>

                        </div>

                        <div className="home_wrapper--text1" >

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi architecto repellendus id eos fuga dolorum corporis, cum enim, 
                            velit magni ea sapiente,
                         
                        </div>

                        <div className="home_wrapper--text2" >

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi architecto repellendus id eos fuga dolorum corporis, cum enim, 
                            velit magni ea sapiente,
                            neque quisquam ab eligendi quo nobis ipsum. Illum!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi architecto repellendus id eos fuga dolorum corporis, cum enim, 
                            velit magni ea sapiente,
                            neque quisquam ab eligendi quo nobis ipsum. Illum!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi architecto repellendus id eos fuga dolorum corporis, cum enim, 
                            velit magni ea sapiente,
                            neque quisquam ab eligendi quo nobis ipsum. Illum!                    
                         
                        </div>

                        <div className="home_wrapper--text3" >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi architecto id eos <a href="#">fuga dolorum</a> corporis, cum enim, 
                            neque quisquam ab eligendi quo nobis ipsum. Illum! 
                            velit magni ea sapiente,
                        </div>

                        <div className="home_wrapper--text4" >
                            <a href="#" className="home_wrapper--text4-a">
                               ipsum dolor sit, amet
                            </a>
                            <a href="#" className="home_wrapper--text4-a">
                               ipsum dolor sit, amet
                            </a>
                            <a href="#" className="home_wrapper--text4-a">
                               ipsum dolor sit, amet
                            </a>
                            <a href="#" className="home_wrapper--text4-a">
                               ipsum dolor sit, amet
                            </a>
                        </div>

                        <div className="home_wrapper--text5" >
                            <span>"</span><br/>
                                <p>
                                ipsum dolor sit, amet  adipisicing elit.
                                Animi corporis, cum enim 
                                velit magni ea sapiente.
                                </p>
                                <br/>
                            <span>"</span>
                        </div>

                        <div className="home_wrapper--text6" >
                              digital designer, creative director
                        </div>

                  </div>    {/* home_wrappe */}              

            </div> /* main_wrapper */
            
        );
    }
}

export default Main;









    