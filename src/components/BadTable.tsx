import React from 'react';

/**
 * BAD TABLE COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */
export function BadTable({ data }: { data: { name: string; age: number; city: string }[] }) {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Table missing proper header structure */}
      {/* VIOLATION: 1.3.1 - No th elements for headers */}
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>City</td>
        </tr>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

/**
 * BAD DATA TABLE - Missing caption and scope
 */
export function BadDataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Table missing caption */}
      {/* VIOLATION: 1.3.1 - Header cells missing scope attribute */}
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * BAD COMPLEX TABLE - Missing headers attribute
 */
export function BadComplexTable() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Complex table missing headers/id associations */}
      <table border={1}>
        <tr>
          <th>Product</th>
          <th>Q1 Sales</th>
          <th>Q2 Sales</th>
        </tr>
        <tr>
          <th>Widget A</th>
          <td>$1000</td>
          <td>$1500</td>
        </tr>
        <tr>
          <th>Widget B</th>
          <td>$2000</td>
          <td>$2500</td>
        </tr>
      </table>
    </div>
  );
}

/**
 * BAD LAYOUT TABLE - Using table for layout
 */
export function BadLayoutTable() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Using table for layout instead of CSS */}
      {/* VIOLATION: 1.3.2 - Reading order may not match visual order */}
      <table width="100%">
        <tr>
          <td width="30%">
            <h2>Sidebar</h2>
            <p>Navigation links here</p>
          </td>
          <td width="70%">
            <h2>Main Content</h2>
            <p>Content goes here</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

/**
 * BAD GRID - Missing ARIA grid pattern
 */
export function BadGrid({ items }: { items: { id: string; name: string; status: string }[] }) {
  return (
    <div>
      {/* VIOLATION: 4.1.2 - Grid not marked with role="grid" */}
      {/* VIOLATION: 2.1.1 - No keyboard navigation for grid cells */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div>ID</div>
        <div>Name</div>
        <div>Status</div>
        
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.status}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/**
 * BAD MERGED CELLS - Merged cells without proper header associations
 */
export function BadMergedCells() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Merged cells (colspan/rowspan) without headers/id associations */}
      <table border={1}>
        <tr>
          <th>Region</th>
          <th>Product</th>
          <th>Sales</th>
        </tr>
        <tr>
          <td rowSpan={2}>East</td>
          <td>A</td>
          <td>$1000</td>
        </tr>
        <tr>
          <td>B</td>
          <td>$2000</td>
        </tr>
      </table>
    </div>
  );
}

/**
 * BAD EMPTY CELLS - Table with missing data
 */
export function BadEmptyCells() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Empty cells without proper identification of missing data */}
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td></td>
          <td>555-1234</td>
        </tr>
        <tr>
          <td></td>
          <td>jane@example.com</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
