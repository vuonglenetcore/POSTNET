using Microsoft.EntityFrameworkCore.Query;
using POSTNET.Data.Repository;
using POSTNET.Model.Helpers;
using POSTNET.Model.ValueObject;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service
{
    public class MasterBaseService<T> : IMasterBaseService<T> where T : class, new()
    {
        private readonly IRepository<T> _repository;

        public MasterBaseService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public System.Drawing.Bitmap Base64StringToBitmap(string base64String)
        {
            Bitmap bmpReturn = null;

            byte[] byteBuffer = Convert.FromBase64String(base64String);
            MemoryStream memoryStream = new MemoryStream(byteBuffer);

            memoryStream.Position = 0;

            bmpReturn = (Bitmap)Bitmap.FromStream(memoryStream);

            memoryStream.Close();
            memoryStream = null;
            byteBuffer = null;

            return bmpReturn;
        }

        public void UpImageFromBase64ToJpg(string folder, string base64String, string imgName)
        {
            //byte[] jpgArray;
            Byte[] pngBytes = Convert.FromBase64String(base64String);
            try
            {
                using (MemoryStream msPng = new MemoryStream(pngBytes))
                {
                    using (System.Drawing.Image img = System.Drawing.Image.FromStream(msPng))
                    {
                        using (MemoryStream msJpeg = new MemoryStream())
                        {
                            img.Save($@"{RootImage.PathImg}" + folder + $"{imgName}.jpg", ImageFormat.Jpeg);
                            //jpgArray = msJpeg.ToArray();
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }

        }


        public void Create(T obj)
        {
            try
            {
                _repository.Insert(obj);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public void Delete(T obj)
        {
            _repository.Delete(obj);
        }

        public async void DeleteById(long id)
        {
            var data = await _repository.GetById(id);
            _repository.Delete(data);
        }

        public async Task<GridResult<T>> GetAll()
        {
            try
            {
                var data = await _repository.GetAll();
                int totalRow = data.Count;
                var result = new GridResult<T>
                {
                    Data = data,
                    TotalPage = totalRow
                };
                return result;
            }
            catch (Exception ex)
            {

            }


            return null;

        }

        public async Task<T> GetById(long id, Func<IQueryable<T>, IIncludableQueryable<T, object>> includes = null)
        {
            return await _repository.GetById(id, includes);
        }

        public void Update(T obj)
        {
            _repository.Update(obj);
        }
    }
}
