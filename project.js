let otp_choice= '';
let otp='';


const gen = document.getElementById('otpType1');
gen.addEventListener('click',genfn);
function genfn(){
    otp_choice='General';
}


const bank = document.getElementById('otpType2');
bank.addEventListener('click',bankfn);
function bankfn(){
    otp_choice='Bank';
}


const GO = document.getElementById('go');
GO.addEventListener('click',gofn);
function gofn(){
    if (otp_choice==='General'){
        otp= generateOTP(6);
    }
    else{
        otp= '@'+generateOTP(5);
    }
    console.log(otp);
    document.getElementById('generateotp').textContent=otp;
}

function generateOTP(length){
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let OTP_subset = '';
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        const randomIndex = randomValues[i] % charset.length;
        OTP_subset += charset[randomIndex];
    }

    return OTP_subset;
}



const login = document.getElementById('login');
login.addEventListener('click',loginfn);
function loginfn(){
    if(document.getElementById('UserInputOTP').value===otp){
        if(otp_choice==='General'){
            if(document.getElementById('type').value==='High Amount Bank OTP'){
                alert('Process Complete\nLogin Safely\nIT IS NOT A HIGH AMOUNT BANKING OTP');
            }
            else{
                alert('Process Complete\nLogin Safely')
            }
        }
        if(otp_choice==='Bank'){
            if(document.getElementById('type').value==='General'){
                alert('YOU MISJUDGED\nDial 1930 - government cyber helpline.\nCall Your Bank:Ask them to instantly block your debit/credit cards, net banking, and UPI.');
            }
            else{
                alert('Process Complete\nHIGH AMOUNT Payment Successful');
            }
        }
        }   
    else{
        alert('Try Again OTP was Invalid');
    }
    gofn();
    
}


