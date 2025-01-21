export function renderBranches(mainContent) {
  mainContent.innerHTML = `
      <div class="container h-100 w-100 p-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Start datetime</th>
                        <th scope="col">End datetime</th>
                        <th scope="col">Allowance</th>
                        <th scope="col">Total time</th>
                        <th scope="col">BDTICID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>50</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>20</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `;
}
