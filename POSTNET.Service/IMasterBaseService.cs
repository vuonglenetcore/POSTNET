using Microsoft.EntityFrameworkCore.Query;
using MySqlX.XDevAPI.Common;
using POSTNET.Model.ValueObject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service
{
    public interface IMasterBaseService<T> where T : class
    {
        public Task<GridResult<T>> GetAll();

        public Task<T> GetById(long id, Func<IQueryable<T>, IIncludableQueryable<T, object>> includes = null);

        public void Update(T obj);

        public void DeleteById(long id);
            
        public void Delete(T obj);

        public void Create(T obj);
        public void UpImageFromBase64ToJpg(string folder, string base64String, string imgName);
        public System.Drawing.Bitmap Base64StringToBitmap(string base64String);
    }
}
