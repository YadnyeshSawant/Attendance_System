const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const presentInput = document.querySelector('#present');
const absent = document.querySelector('#present');
    if(presentInput.checked)
    {
        absentInput.disabled = true;
    }else{
        absentInput.checked = false;
    }

const downloadLink = document.querySelector('#download-link');

let attendanceData = [];

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = nameInput.value;
	const date = dateInput.value;
	const present = presentInput.checked;
    const absent = absentInput.checked;

	// Add attendance data to array
	attendanceData.push({
		Name: name,
		Date: date,
		Present: present ? 'Yes' : 'No',
        Absent: absent ? 'yes':'No'
	});

	// Reset form inputs
	nameInput.value = '';
	dateInput.value = '';
	presentInput.checked = false;
    absentInput.checked = false;
});

downloadLink.addEventListener('click', function(e) {
	e.preventDefault();

	// Create XLSX file using SheetJS
	const worksheet = XLSX.utils.json_to_sheet(attendanceData);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');
	const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

	// Download XLSX file
	const filename = 'Book1.xlsx';
	const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
	const url = window.URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

function s2ab(s) {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i = 0; i < s.length; i++) {
		view[i] = s.charCodeAt(i) & 0xFF;
	}
	return buf;
}
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Write attendance data to file using FileSystem API
// 	if (window.File && window.FileReader && window.FileSystem) {
// 		const fileSystem = window.FileSystem;
// 		fileSystem.root.getFile('Attendance.xlsx', { create: true }, function(fileEntry) {
// 			fileEntry.createWriter(function(fileWriter) {
// 				fileWriter.seek(fileWriter.length); // Move cursor to end of file
// 				const blob = new Blob([`${name}\t${date}\t${present}\n`], { type: 'text/plain' });
// 				fileWriter.write(blob);
// 				alert('Attendance recorded successfully');
// 			}, errorHandler);
// 		}, errorHandler);
// 	} else {
// 		alert('Filesystem API not supported');
// 	}
// });

// function errorHandler(error) {
// 	alert('An error occurred: ' + error.message);
// }
//--------------------------------------------------------------------------------------------
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Do something with the attendance data, such as storing it in a database or spreadsheet

// 	alert(`Attendance submitted for ${name} on ${date}. Present: ${present}`);
// });

//SECOND ATTEMPT------------------------------------------------------------------------------------------------
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Send attendance data to Google Spreadsheet
// 	const url = 'https://script.google.com/macros/s/{YOUR_SCRIPT_ID}/exec'; // Replace {YOUR_SCRIPT_ID} with your Google Script ID
// 	fetch(`${url}?name=${name}&date=${date}&present=${present}`)
// 		.then(response => {
// 			if (response.ok) {
// 				alert('Attendance submitted successfully!');
// 			} else {
// 				alert('Error submitting attendance.');
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error);
// 			alert('Error submitting attendance.');
// 		});
// });
// THIRD ATTEMPT---------------------------------------------------------------------------------------------------------
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Send attendance data to Google Spreadsheet
// 	const url = 'https://script.google.com/macros/s/1Di-7j9MnzyUPLQQOZGZedFN95NRE4pByPXA5NsVDUWhajsByI0qieisQ/exec'; // Replace {YOUR_SCRIPT_ID} with your Google Script ID
// 	fetch(`${url}?name=${name}&date=${date}&present=${present}`)
// 		.then(response => {
// 			if (response.ok) {
// 				alert('Attendance submitted successfully!');
// 				// Open the spreadsheet in a new tab
// 				window.open('https://docs.google.com/spreadsheets/d/1X4ZDpE2lDzULk4EyCgt35ivAdPU1KCdDf3TTrEaDLoc', '_blank'); // Replace {YOUR_SPREADSHEET_ID} with your Google Spreadsheet ID
// 			} else {
// 				alert('Error submitting attendance.');
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error);
// 			alert('Error submitting attendance.');
// 		});
// });
//------------------------------------------------------------------------------
// const fs = require('fs');
// const XLSX = require('xlsx');

// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Add attendance data to an array
// 	const data = [
// 		['Name', 'Date', 'Present'],
// 		[name, date, present ? 'Yes' : 'No']
// 	];

// 	// Create a new Excel workbook
// 	const workbook = XLSX.utils.book_new();

// 	// Add the attendance data to a new Excel worksheet
// 	const worksheet = XLSX.utils.aoa_to_sheet(data);
// 	XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');

// 	// Convert the workbook to a binary Excel file
// 	const excelFile = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});

// 	// Save the binary Excel file to a file path using Node.js file system API
// 	const filePath = 'Book1.xlsx';
// 	fs.writeFileSync(filePath, s2ab(excelFile));
// });

// // Convert a string to an ArrayBuffer
// function s2ab(s) {
// 	const buf = new ArrayBuffer(s.length);
// 	const view = new Uint8Array(buf);
// 	for (let i=0; i<s.length; i++) {
// 		view[i] = s.charCodeAt(i) & 0xFF;
// 	}
// 	return buf;
// }