import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';






const Example = (props) => {
    const states = ["UP", "Delhi", "Haryana"]
    const emp = [
        { name: "Subodh", state: "Delhi", desig: "SE" },
        { name: "Ravi", state: "UP", desig: "SE" },
        { name: "Hari", state: "Haryana", desig: "Manager" }
    ]
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [state, setState] = useState("Delhi")
    const [stateEmp, setStateEmp] = useState(emp)

    const toggle = () => setDropdownOpen(prevState => !prevState);


    const getState = (state) => {
        console.log("click", state)
        setState(state)

        let newStateEmp = emp.filter(e => state === e.state)

        setStateEmp(newStateEmp)
    }

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    {states.map((it, i) => <DropdownItem key={`${i}`} onClick={() => getState(it)}>{it}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Desig</th>
                    </tr>
                </thead>
                <tbody>
                    {stateEmp.map((e, i) => {
                        return (
                            <tr key={`${i}`}>
                                <td key={`${e.name}_${i}`}>{e.name}</td>
                                <td key={`${e.state}_${i}`}>{e.state}</td>
                                <td key={`${e.desig}_${i}`}>{e.desig}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>


    );
}

export default Example;