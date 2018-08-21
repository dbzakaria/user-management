user management
===============

### Description

 A user managment app where you can:
- Login with your username and password to be able to acess the dashboard and make changes.
- Sort every column either ascending or descending and show an icon to indicate which way the data is sorted.
- The user can to create, read and delete data from it.
- The user can update in it.

### Technologies used

1. `reactjs`
2. `react-redux`
3. `redux-thunk`

### 3rd party packages

1. `lodash`: Component only invokes save state at most once per every wait milliseconds. Click [here](https://lodash.com/) for more info.

### Installation

1. `npm install`
2. `npm start`
3. open a new terminal and run `npm run api` 

### Features
- The user can log in and log out
- the user can add, create, delete and update in the dashboard.
- The columns have a max width but can still handle long text content.
- The grid is made entirely made of DIV elements, no <table> element.
- The grid rows are generated from JSON sample data.
- Data rows can scroll vertically and horizontally.
- The column headers remain fixed when scrolling data vertically and follow the columns when scrolling horizontally.
- Clicking the column header labels sorts the data ASC / DESC.
- Column headers show an icon to indicate which way the data is sorted.

