const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  birthday: Date,
  city: String,
  image: {
    type: String,
    default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXR0tT////a29zOz9HS09Xx8fL6+vrg4OL29vfj4+TV1tju7u/l5ufr7O3c3d74+Phnp3fnAAADgElEQVR4nO3cAY6rMAwEUIIpAQr0/rf9zaKvrrQtJHZbZ9C8E2QUwDgJNA0REREREREREREREREREREREREREREREVHNRMR7CB9zjzat47zM4zo158spXbz24aG/xu5EIaUZh/DXMDbnCCnd8iTeZjnFRL7O95PRe3hWsu7mSyL0NMr1MGAIV+SIt4yA90eO9zD1+uN0P3rvgSpJbsAQbpAXqlyyA4ZwAYwoY0HAEEa8iF1RwBA67wGXKrpGE7jrtC0MGMLkPeQyxVMIN4mld2HiPeYiMisSzt6jLiHP+sEjA9RlqgiIdZke90zPrN7Dzqe6De83Is5lqqgVCVC9KOgqfgPqMEQVMASchJMyIc7bt+5RivQwLWsNH0bvgeeS/SXS1xaUG1FZLIDKheQtIv4FUy60xQKnXGiaw433yHNpyyHOSoa2HOIURG05hCmI6nIIUxDV5RBmo021SLMBWapRdodJD5JQHRCl5OsLPkqHWL5l8dB6Dz5LNCSM3oPPoVxK3ECs7BsKPkjJNxR8kB7YUA5BemBLOcQoiJZyiFEQ9d1hAlAQTcUColxkHUd8DaB/Mj1KIboL24MG4VFjeStNqn8zNb3RJNXfiLZ6n1SesPDM5TOVrygan6RJ3U9TY7nf1HzoRCwLGA8V7168J2DNL6f2m3BT79cJEt+Rsa/6OyFZ9Uv6m2GtOV8i3azdxg/hNkN8rifSjZp3t8vYAX08KzLF5ZL93dNliRNQuv/krpvWuPMi18e4Tp2gf+C9s58IsXh4bCchyI7okZ2WEWKJ+9jOHJ4/4Vmu0tdFo+5eMN/LgDgH2fbtLfPX2ycV2N0xhdgRPbQT8BSX6cECKny9kOmoXxwm4IzSxJx+eIiQ/6kpaxKxWsMmxWuX0tWM29KChLz3vqoOf5vK6vtgkXUx7pAua7Uhtcszz6ayxrtSutm6jvjbUNmim0hWWSgMGauZyL3fldkslRTKT+XbMrp704baS33rPY0fDhjcW8g37GofcV7p+PwUOk+i6cRzLtd1APvpmRyeCW1nSXM5fpVoPGmZy/Mg2FcCel6m1nOIudzOK5rPIebyW5D7UkC/VVX7OcRcTpep4WvYUk67cNYT3SV8Tn+/46RlLpdjteo/mGi4XKb6v19oeJw5ndpvqvhULREREREREREREREREREREREREREREREREdF3df8ACFwlGGq2k00AAAAASUVORK5CYII='
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;