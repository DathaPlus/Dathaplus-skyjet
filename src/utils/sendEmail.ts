export const sendEmailForm = async (data: object) => {
  try {
    return await fetch("https://skyjetselite.theairlinecarrerprogram.com/api/v1/email.php", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        data,
      }),
    });
  } catch (error) {
    console.error("Error al enviar el email: ",error);
  }

};
