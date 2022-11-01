import React from "react";
import { Button, Table, TableCell } from "semantic-ui-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    console.log(data);
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  useEffect(
    () => {},
    axios
      .get(`https://636162b8af66cc87dc2ab755.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      }),
    []
  );

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData &&
            APIData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </Table.Cell>
                  <Link to={"/update"}>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setData(data);
                        }}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </Link>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
}
