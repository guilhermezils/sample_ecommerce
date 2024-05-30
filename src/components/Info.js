import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const info = ({ ingredients, weight, delivery }) => (
  <Tabs>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Additional Information</Tab>
    </TabList>
    <TabPanel>
      <h2>ingredients</h2>
      <p>{ingredients}</p>
    </TabPanel>
    <TabPanel>
      <h2>Additional Information</h2>
      <table className="additional-info">
        <tbody>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Delivery:</td>
            <td>{delivery}</td>
          </tr>
        </tbody>
      </table>
    </TabPanel>
  </Tabs>
);
export default Info;
