import React from "react";

const CvComponent = () => {
  //   const handleDownload = () => {
  //     // Perform any necessary actions before downloading the file
  //     // For example, fetch the file from the server
  //     fetch("http://localhost:8009/cv")
  //       .then((response) => {
  //         // Check if response is successful
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         // Return blob data
  //         return response.blob();
  //       })
  //       .then((blob) => {
  //         // Create a temporary URL for the blob
  //         const url = window.URL.createObjectURL(new Blob([blob]));
  //         // Create a temporary anchor element
  //         const a = document.createElement("a");
  //         // Set the URL and download attribute for the anchor
  //         a.href = url;
  //         a.download = "cv.docx"; // Set the desired filename and extension
  //         // Programmatically click the anchor element to trigger the download
  //         a.click();
  //         // Cleanup: Revoke the temporary URL
  //         window.URL.revokeObjectURL(url);
  //       })
  //       .catch((error) => {
  //         console.error("There was a problem with the fetch operation:", error);
  //       });
  //   };
  const handleDownload = () => {
    // Construct the URL for the document file
    const fileUrl = process.env.PUBLIC_URL + "/cv/cv.docx";

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "cv.docx"; // Set the filename for the downloaded file
    anchor.click();
  };

  return (
    <>
      {/* Add an onClick event handler to trigger the download */}
      <a onClick={handleDownload}>Download Cv</a>
    </>
  );
};

export default CvComponent;
