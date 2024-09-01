import emailjs from '@emailjs/browser';


function SendMail(){
  var params = {
    from_name: document.getElementById('fullname').value,
    email_id : document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }

  emailjs.send("service_ejouusr", "template_6jsor7e", params).then(function(res){
    alert("Success! " + res.status);
  })
}
function(){
      emailjs.init({
        publicKey: "sZR_x2Tj0-JssIMWd",
      });
   })();
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'sZR_x2Tj0-JssIMWd',
  blockHeadless: true,
  blockList: {
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
  },
  limitRate: {
    throttle: 10000, // 10s
  },
});
