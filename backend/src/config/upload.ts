import multer from 'multer';
import path from 'path';

export default{
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            //uma função callback recebe dois parâmetros sempre. o primeiro parâmetro se trata de erro e, no caso desse código, como dificilmente haverá um erro, podemos passar o erro como nulo
            cb(null, fileName);
        }
    })
};