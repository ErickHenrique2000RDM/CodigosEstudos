import React, {Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {add, changeDescription, clear, search} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        const {add, search, description} = this.props 
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if (e.key === 'Escape'){
            this.props.clear()
        }
    }

    render(){
        const {add, search, description} = this.props 
        return (
            <div role='form' className='todoForm'>
    
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className='form-control'
                    placeholder='Adicione uma tareda'
                    onChange={this.props.changeDescription}
                    value={this.props.description}
                    onKeyUp={this.keyHandler}
                    />   
                </Grid>
    
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon='plus'
                    onClick={() => add(description)}
                    ></IconButton>
                    <IconButton style="info" icon='search'
                    onClick={() => search()}
                    ></IconButton>
                    <IconButton style="default" icon='close'
                    onClick={this.props.clear}
                    ></IconButton>
                </Grid>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, clear, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)