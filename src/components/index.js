import React from 'react';
import { Link } from 'react-router';
import Contact from './contacts.js'

//Set up the addContact feature

var IndexPage = React.createClass({
  
  getInitialState: function() {
    return{
      classes: 'col-md-3 hidden',
      classes2: 'col-md-9 top2',
      open: 'pull-right fa fa-plus hidden-xs',
      here:''
    }
  },

  sidebar: function() {
      this.setState({
        classes: 'col-md-3 leftSidebar top2',
        classes2: 'col-md-6 top2',
        open:''
      })
  },

  close: function() {
      this.setState({
        classes: 'col-md-3 hidden',
        classes2: 'col-md-9 top2',
        open: 'pull-right fa fa-plus hidden-xs'
      })
  },

  handleSearch: function(e) {
      e.preventDefault();
      var here = this.refs.here.value;
      this.setState({here:here})
      console.log("the name you typed is " + this.state.here)
  },

  render: function() {
    const {contacts} = this.props;
    contacts.sort(function(a, b){
       if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
       }
        else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
       } 
       return 0;
    });

    if (this.props.namess.length === 0){
      var contactsList = contacts.map((contact,i) => <Contact {...this.props} key={i} i={i} contact={contact} />)
    } else{
      contactsList = contacts.filter((contacta,i) => 
        contacta.name.toLowerCase().indexOf(this.props.namess.toLowerCase()) !== -1).map((contact,i) => 
        <Contact {...this.props} key={i} i={i} contact={contact} />);
    }

    if (this.state.here.length ===0){
      var contactsList_xs = contacts.map((contact,i) => <Contact {...this.props} key={i} i={i} contact={contact} />)
      
    } else{
      contactsList_xs = contacts.filter((contacta,i) => 
        contacta.name.toLowerCase().indexOf(this.state.here.toLowerCase()) !== -1).map((contact,i) => 
        <Contact {...this.props} key={i} i={i} contact={contact} />);
    }
    return(
      <div>
        <div className="row">
          <div className="col-md-3 sidebar">
            <div style={{backgroundColor:'#fff',border:'0.001em solid #d0d3d4',margin:0,padding:10}}>
              <h5 className="" ><i className="pull-left mdi mdi-account account2" style={{margin:-10,marginLeft:0}}></i><b style={{padding:20}}>Xuan Lam</b></h5>
              
            </div>
            
            <div className="clearfix"></div>
            <Link to="/"><h5 className="active sidebox "><i className="blue fa fa-user fa-lg p-3"></i> Contact  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-history fa-lg p-3"></i> Frequently contacted  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-plus-square fa-lg p-3"></i> Merge&fix  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-chevron-up fa-lg p-3"></i> Labels  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-plus fa-lg p-3"></i> Create label  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-upload fa-lg p-3"></i> Import  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-download fa-lg p-3"></i> Export  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fa fa-print fa-lg p-3"></i> Print  </h5></Link>
            <Link to="/"><h5 className=" sidebox "><i className="blue fal fa-arrow-alt-circle-down fa-lg p-3"></i> Other contacts  </h5></Link>
                   
          </div>
          

          <div className={this.state.classes2} style={{overflow:'auto'}}>
            <div className="nav col-md-6 visible-xs navbar-nav navbar-right">
                <div style={{padding:10}}>
                  <input type="text" onChange={this.handleSearch} ref="here" className="form-control" placeholder="Search for contacts" />
                </div>
            </div>
            <p>All Contacts ({contacts.length})  </p>
            <div className="mainbar hidden-xs" style={{overflow:'auto'}}>
              {contactsList}
            </div>
            <div className="mainbar visible-xs" style={{overflow:'auto'}}>
              {contactsList_xs}
            </div>
          </div>
          
        </div>
      </div>
    );
  }
});

export default IndexPage;
