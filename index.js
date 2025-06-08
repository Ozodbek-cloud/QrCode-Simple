import qrcode from "qrcode"

qrcode.toFile('qrcode.png', "https://ozodbek116.netlify.app/", function(err) {
      if (err) {
        console.log(err)
      }
      console.log("Qr code Saqlandi!")
})
