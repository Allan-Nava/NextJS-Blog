/*
 *  avatar.js
 *  Allan Nava 2020-11-03
 *  Allan Nava 2020-11-06
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
 export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
