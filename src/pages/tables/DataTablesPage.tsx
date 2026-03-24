import AppCard from '@/components/widgets/AppCard'
import DataTable from '@/components/tables/DataTable'
import type { DataColumn } from '@/types'

// -- Sortable Table --
const sortableColumns: DataColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'department', label: 'Department' },
  { key: 'position', label: 'Position' },
  { key: 'salary', label: 'Salary' },
]

const sortableRows = [
  { name: 'Alice Johnson', department: 'Engineering', position: 'Senior Developer', salary: 95000 },
  { name: 'Bob Smith', department: 'Marketing', position: 'Marketing Manager', salary: 82000 },
  { name: 'Carol Williams', department: 'Design', position: 'UX Designer', salary: 78000 },
  { name: 'David Brown', department: 'Engineering', position: 'DevOps Engineer', salary: 90000 },
  { name: 'Eve Davis', department: 'HR', position: 'HR Specialist', salary: 65000 },
  { name: 'Frank Miller', department: 'Sales', position: 'Sales Director', salary: 105000 },
  { name: 'Grace Lee', department: 'Engineering', position: 'Frontend Developer', salary: 85000 },
  { name: 'Henry Wilson', department: 'Finance', position: 'Accountant', salary: 72000 },
]

// -- Searchable & Filterable Table --
const searchableColumns: DataColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'department', label: 'Department' },
  { key: 'status', label: 'Status', sortable: false },
]

const searchableRows = [
  { id: 1, name: 'Alice Johnson', email: 'alice@company.com', department: 'Engineering', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@company.com', department: 'Marketing', status: 'Active' },
  { id: 3, name: 'Carol Williams', email: 'carol@company.com', department: 'Design', status: 'Inactive' },
  { id: 4, name: 'David Brown', email: 'david@company.com', department: 'Engineering', status: 'Active' },
  { id: 5, name: 'Eve Davis', email: 'eve@company.com', department: 'HR', status: 'Active' },
  { id: 6, name: 'Frank Miller', email: 'frank@company.com', department: 'Sales', status: 'Inactive' },
  { id: 7, name: 'Grace Lee', email: 'grace@company.com', department: 'Engineering', status: 'Active' },
  { id: 8, name: 'Henry Wilson', email: 'henry@company.com', department: 'Finance', status: 'Active' },
  { id: 9, name: 'Ivy Chen', email: 'ivy@company.com', department: 'Design', status: 'Active' },
  { id: 10, name: 'Jack Taylor', email: 'jack@company.com', department: 'Marketing', status: 'Inactive' },
]

const departmentOptions = ['Design', 'Engineering', 'Finance', 'HR', 'Marketing', 'Sales']

// -- Paginated Table --
const paginatedColumns: DataColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'product', label: 'Product' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock' },
]

const paginatedRows = [
  { id: 1, product: 'Laptop Pro 15', category: 'Electronics', price: '$1,299.00', stock: 45 },
  { id: 2, product: 'Wireless Mouse', category: 'Accessories', price: '$29.99', stock: 230 },
  { id: 3, product: 'USB-C Hub', category: 'Accessories', price: '$49.99', stock: 112 },
  { id: 4, product: 'Mechanical Keyboard', category: 'Accessories', price: '$89.99', stock: 78 },
  { id: 5, product: 'Monitor 27 inch', category: 'Electronics', price: '$399.99', stock: 22 },
  { id: 6, product: 'Webcam HD', category: 'Electronics', price: '$79.99', stock: 156 },
  { id: 7, product: 'Desk Lamp', category: 'Furniture', price: '$34.99', stock: 89 },
  { id: 8, product: 'Ergonomic Chair', category: 'Furniture', price: '$549.99', stock: 15 },
  { id: 9, product: 'Standing Desk', category: 'Furniture', price: '$699.99', stock: 8 },
  { id: 10, product: 'Headphones', category: 'Electronics', price: '$199.99', stock: 67 },
  { id: 11, product: 'Mousepad XL', category: 'Accessories', price: '$19.99', stock: 340 },
  { id: 12, product: 'Monitor Arm', category: 'Accessories', price: '$129.99', stock: 54 },
  { id: 13, product: 'Cable Organizer', category: 'Accessories', price: '$12.99', stock: 420 },
  { id: 14, product: 'Tablet 10 inch', category: 'Electronics', price: '$449.99', stock: 31 },
  { id: 15, product: 'Keyboard Wrist Rest', category: 'Accessories', price: '$24.99', stock: 180 },
]

// -- Combined Data Table --
const combinedColumns: DataColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'department', label: 'Department' },
  { key: 'position', label: 'Position' },
  { key: 'salary', label: 'Salary' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'status', label: 'Status', sortable: false },
]

const combinedRows = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@company.com', department: 'Engineering', position: 'Senior Developer', salary: 95000, startDate: '2020-03-15', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob.smith@company.com', department: 'Marketing', position: 'Marketing Manager', salary: 82000, startDate: '2019-07-22', status: 'Active' },
  { id: 3, name: 'Carol Williams', email: 'carol.williams@company.com', department: 'Design', position: 'UX Designer', salary: 78000, startDate: '2021-01-10', status: 'Inactive' },
  { id: 4, name: 'David Brown', email: 'david.brown@company.com', department: 'Engineering', position: 'DevOps Engineer', salary: 90000, startDate: '2020-09-05', status: 'Active' },
  { id: 5, name: 'Eve Davis', email: 'eve.davis@company.com', department: 'HR', position: 'HR Specialist', salary: 65000, startDate: '2022-04-18', status: 'Active' },
  { id: 6, name: 'Frank Miller', email: 'frank.miller@company.com', department: 'Sales', position: 'Sales Director', salary: 105000, startDate: '2018-11-30', status: 'Active' },
  { id: 7, name: 'Grace Lee', email: 'grace.lee@company.com', department: 'Engineering', position: 'Frontend Developer', salary: 85000, startDate: '2021-06-14', status: 'Active' },
  { id: 8, name: 'Henry Wilson', email: 'henry.wilson@company.com', department: 'Finance', position: 'Accountant', salary: 72000, startDate: '2020-02-28', status: 'Active' },
  { id: 9, name: 'Ivy Chen', email: 'ivy.chen@company.com', department: 'Design', position: 'Graphic Designer', salary: 70000, startDate: '2022-08-01', status: 'Active' },
  { id: 10, name: 'Jack Taylor', email: 'jack.taylor@company.com', department: 'Marketing', position: 'Content Writer', salary: 58000, startDate: '2023-01-15', status: 'Inactive' },
  { id: 11, name: 'Karen White', email: 'karen.white@company.com', department: 'Engineering', position: 'QA Engineer', salary: 80000, startDate: '2021-11-22', status: 'Active' },
  { id: 12, name: 'Leo Martinez', email: 'leo.martinez@company.com', department: 'Sales', position: 'Account Executive', salary: 68000, startDate: '2022-05-10', status: 'Active' },
  { id: 13, name: 'Mia Robinson', email: 'mia.robinson@company.com', department: 'HR', position: 'Recruiter', salary: 62000, startDate: '2023-03-05', status: 'Active' },
  { id: 14, name: 'Noah Clark', email: 'noah.clark@company.com', department: 'Engineering', position: 'Backend Developer', salary: 92000, startDate: '2020-07-19', status: 'Active' },
  { id: 15, name: 'Olivia Hall', email: 'olivia.hall@company.com', department: 'Finance', position: 'Financial Analyst', salary: 75000, startDate: '2021-09-12', status: 'Inactive' },
]

function formatSalary(value: number): string {
  return '$' + value.toLocaleString()
}

export default function DataTablesPage() {
  return (
    <div>

      {/* Sortable Table */}
      <AppCard title="Sortable Table" cardClass="mb-4">
        <div className="-mx-5 -mb-5 -mt-1">
          <DataTable
            columns={sortableColumns}
            rows={sortableRows}
            pageSize={10}
            renderCell={{
              salary: (_row, value) => <>{formatSalary(value)}</>,
            }}
          />
        </div>
      </AppCard>

      {/* Searchable & Filterable Table */}
      <AppCard title="Searchable & Filterable Table" cardClass="mb-4">
        <DataTable
          columns={searchableColumns}
          rows={searchableRows}
          searchable={true}
          filterable={true}
          filterKey="department"
          filterOptions={departmentOptions}
          pageSize={10}
          renderCell={{
            status: (_row, value) => (
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                  value === 'Active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {value}
              </span>
            ),
          }}
        />
      </AppCard>

      {/* Table with Pagination */}
      <AppCard title="Table with Pagination" cardClass="mb-4">
        <DataTable
          columns={paginatedColumns}
          rows={paginatedRows}
          pageSize={5}
        />
      </AppCard>

      {/* Combined Data Table */}
      <AppCard title="Combined Data Table (Sort + Search + Pagination)" cardClass="mb-4">
        <DataTable
          columns={combinedColumns}
          rows={combinedRows}
          searchable={true}
          pageSize={5}
          renderCell={{
            salary: (_row, value) => <>{formatSalary(value)}</>,
            status: (_row, value) => (
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                  value === 'Active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {value}
              </span>
            ),
          }}
        />
      </AppCard>

    </div>
  )
}
