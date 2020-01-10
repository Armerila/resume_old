import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
          activeItem: '',
          activeItemPosition: 0,
          activeItemColor: '',
          SidebarItems: [
            { text: 'Home' },
            { text: 'Resume' },
            { text: 'About' },
            { text: 'Contact' },
          ],
        }
        
        this.handleClick = this.handleClick.bind(this)
      }
      
      handleClick(activeItem) {
        return e => {
          e.preventDefault()
        
          this.setState({
            activeItem,
            activeItemPosition: document.getElementById(activeItem).offsetTop,
            activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
          })
        }
      }
      
      render() {
        const SidebarItems = this.state.SidebarItems.map(item => <SidebarItem item={ item } handleClick={ this.handleClick }/>)
        return (
          <div className='sidebar'>
            <span className='sidebar-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
            { SidebarItems }
          </div>
        )
      }
    }

    function SidebarItem(props) {
        return (
          <div 
            className='sidebar-item'
            id={ props.item.text }
            onClick={ props.handleClick(props.item.text) }
          >
            { props.item.text.toUpperCase() }
          </div>
        )
      }
      
      


export default Sidebar;