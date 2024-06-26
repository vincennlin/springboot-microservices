import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class EmployeeComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            employee: {},
            department: {},
            organization: {}
        };

    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            console.log(res.data)
            this.setState({employee: res.data.employee})
            this.setState({department: res.data.department})
            this.setState({organization: res.data.organization})

            console.log(this.state.employee)
            console.log(this.state.department)
            console.log(this.state.organization)
        
        })
    }
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default EmployeeComponent;