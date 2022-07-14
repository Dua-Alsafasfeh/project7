import React, { Component } from 'react';
import axios from 'axios';
import "../style/userAds.css";


class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
      axios.post('http://localhost/project7/php_crud/view.php')
      .then((data) => {
        this.setState({
          items: data.data,
          isLoaded: true
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div class="my-custom-scrollbar my-custom-scrollbar-primary mb-5 mr-5">
     <div>
        {this.state.items.map((ads) => {
          return(
            <div>
            <div class="sidebar-title for-tablet">Sidebar</div>
            <aside>
              <div class="aside-body">
                <article class="sidebarr article-mini ">
                  <div class="inner">
                    <div >
                        <img src={ads.img} alt="Sample Article imgedit" />
                    </div>
                    <div class='pad'>
                     
                      <h5 class="text-center" >{ads.Title}</h5>
                      <h1>Type :&nbsp;{ads.Type}</h1>
                      <small><strong>Phone Number </strong>:&nbsp; {ads.Phone}</small><br></br>
                      <small><strong> City</strong> :&nbsp; {ads.City}</small><br></br>
                      <small><strong>Details </strong>:&nbsp; {ads.Des}</small>
                    </div>
                  </div>
                </article>             
              </div>
            </aside>
            </div>
          );
        })}
      </div>
      </div>
        
    );
  }
}

export default Ads;