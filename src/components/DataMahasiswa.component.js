

export const AddMahasiswa = ({ handleChange, handleSubmit, mahasiswa }) => {

    return (

        <div className="card shadow bg-dark text-light">
            <div className="card-body">
                <h5 className="card-title">Tambah Data Mahasiswa</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">NIK</label>
                        <input value={mahasiswa.nik || ""} onChange={handleChange} placeholder="123xxxxx" type="number" name="nik" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nama Mahasiswa</label>
                        <input value={mahasiswa.nama || ""} onChange={handleChange} placeholder="Nama Anda" type="text" name="nama" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jurusan Mahasiswa</label>
                        <select value={mahasiswa.jurusan || ""} onChange={handleChange} name="jurusan" className="form-select">
                            <option >Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Akutansi">Akutansi</option>
                            <option value="Management">Management</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status Mahasiswa</label>
                        <select value={mahasiswa.status || ""} onChange={handleChange} name="status" className="form-select">
                            <option >Status</option>
                            <option value="Aktif">Aktif</option>
                            <option value="Cuti">Cuti</option>
                            <option value="Lulus">Lulus</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" >Simpan</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export const ListMahasiswa = ({ daftarmahasiswa, getMahasiswa, handleRemove}) => {
    return (
        <div className="card shadow bg-dark text-light">
            <div className="card-body">
                <h5 className="card-title">Daftar Mahasiswa</h5>
                <table className="table text-light">
                    <thead>
                        <tr>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            daftarmahasiswa.map((mahasiswa, i) => {
                                return <tr key={i}>
                                    <td>{mahasiswa.nik}</td>
                                    <td>{mahasiswa.nama}</td>
                                    <td>{mahasiswa.jurusan}</td>
                                    <td>{mahasiswa.status}</td>
                                    <td >
                                        <button onClick={() => getMahasiswa(mahasiswa, i)} type="button" className="btn btn-warning mx-2">Edit</button>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export const EditMahasiswa = (props) => {
    return (
        <div className="card shadow bg-warning  ">
            <div className="card-body">
                <h5 className="card-title">Ubah {props.mahasiswa.nik}</h5>
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">NIK</label>
                        <input value={props.mahasiswa.nik || ""} onChange={props.handleChange} placeholder="123xxxxx" type="number" name="nik" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nama Mahasiswa</label>
                        <input value={props.mahasiswa.nama || ""} onChange={props.handleChange} placeholder="Nama Anda" type="text" name="nama" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jurusan Mahasiswa</label>
                        <select value={props.mahasiswa.jurusan || ""} onChange={props.handleChange} name="jurusan" className="form-select">
                            <option >Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Akutansi">Akutansi</option>
                            <option value="Management">Management</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status Mahasiswa</label>
                        <select value={props.mahasiswa.status || ""} onChange={props.handleChange} name="status" className="form-select">
                            <option >Status</option>
                            <option value="Aktif">Aktif</option>
                            <option value="Cuti">Cuti</option>
                            <option value="Lulus">Lulus</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" >Ubah</button>
                        <button onClick={props.handleCancelEdit} className="btn btn-dark" >Cancel</button>
                        <button onClick={props.handleRemove} type="submit" className="btn btn-danger">Delete</button>
                    </div>
                </form>

            </div>
        </div>
    )
}


