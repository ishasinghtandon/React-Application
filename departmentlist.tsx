import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

// Import the JSON data
import jsonData from './data.json'; // Make sure to adjust the path

interface SubDepartment {
  name: string;
}

interface Department {
  name: string;
  subDepartments: SubDepartment[];
}

const DepartmentListComponent: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {jsonData.map((department: Department, index: number) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            }
          >
            <Typography>{department.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {department.subDepartments.map((subDepartment, subIndex) => (
                <div key={subIndex}>
                  <input type="checkbox" />
                  <label>{subDepartment.name}</label>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DepartmentListComponent;
