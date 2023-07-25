import Papa from 'papaparse';
import { saveAs } from 'file-saver';

const convertirCSV = (objArray, fileName) => {
  const csv = Papa.unparse({
    data: objArray,
    header: true,
  });
  // Eliminar el encabezado del CSV
  const csvWithoutHeader = csv.substring(csv.indexOf('\n') + 1);
  // Pasar las a que formato se va a exportar el txt
  const blob = new Blob([csvWithoutHeader], { type: 'text/csv;charset=ANSI;' });
  saveAs(blob, fileName, { encoding: 'ANSI' });

  return csv;
};

export default convertirCSV;