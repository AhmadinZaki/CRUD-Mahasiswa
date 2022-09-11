import { useState } from "react"
import { AddMahasiswa, EditMahasiswa, ListMahasiswa } from "../components/DataMahasiswa.component";

export const Mahasiswa = () => {

    const [daftarmahasiswa, setDaftarMahasiswa] = useState([])
    const [mahasiswa, setMahasiswa] = useState({});
    const [isedit, setIsEdit] = useState(false);
    const [currentID, setCurrentID] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isedit) {
            let updateMahasiswa = [...daftarmahasiswa]
            updateMahasiswa[currentID] = mahasiswa;
            setDaftarMahasiswa(updateMahasiswa);
            setIsEdit(false);
            setMahasiswa({});
            setCurrentID(null);
        } else {
            setDaftarMahasiswa((values) => [mahasiswa, ...values])
            setMahasiswa({})
        }
    }


    const handleChange = (e) => {
        const key = e.target.name;
        const nilai = e.target.value;

        setMahasiswa((values) => ({ ...values, [key]: nilai }))
        console.log(mahasiswa);
    }

    const getMahasiswa = (mahasiswa, index) => {
        setMahasiswa(mahasiswa);
        setIsEdit(true);
        setCurrentID(index);
    }

    const handleCancelEdit = (e) => {
        setIsEdit(false);
    }

    const handleRemove = (e) => {
        // array splice(index, 1);
        let updateMahasiswa = [...daftarmahasiswa];
        updateMahasiswa.splice(currentID, 1);
        setDaftarMahasiswa(updateMahasiswa);
        setIsEdit(false);
        setMahasiswa({});
        setCurrentID(null);

    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    {
                        isedit ?
                            <EditMahasiswa handleRemove={handleRemove}  handleCancelEdit={handleCancelEdit} mahasiswa={mahasiswa} handleChange={handleChange} handleSubmit={handleSubmit} />
                            :
                            <AddMahasiswa mahasiswa={mahasiswa} handleChange={handleChange} handleSubmit={handleSubmit} />
                    }

                </div>
                <div className="col-md-8">
                    <ListMahasiswa   getMahasiswa={getMahasiswa} daftarmahasiswa={daftarmahasiswa} />
                </div>
            </div>
        </div>
    )
} 