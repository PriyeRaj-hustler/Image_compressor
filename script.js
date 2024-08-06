const img=document.querySelector('#my_image');
const org_img=document.querySelector('#original_image_container');
const com_img=document.querySelector('#compressed_image_container')

img.addEventListener('change',(e)=>{
    const image=e.target.files[0];
    const reader=new FileReader();
    reader.onload=()=>{
        let newImg=new Image();
        newImg.src=reader.result;
        newImg.onload=()=>{
            const canvas=document.createElement('canvas')
            canvas.height=newImg.height;
            canvas.width=newImg.width;
            const ctx=canvas.getContext('2d')

            newImg.width=150;
            org_img.appendChild(newImg)
            ctx.drawImage(newImg,0,0)
            const newUrl=canvas.toDataURL('image/jpeg',0.5)
            com_img.innerHTML=`<img src="${newUrl}" width="150" onclick="downloadImage(event)">`
        }
    }
    reader.readAsDataURL(image);
})
const downloadImage=(e)=>{
    const a=document.createElement('a')
    a.download='compressed_image.jpeg'
    a.href=e.target.src;
    a.target='blank'
    a.click()
}