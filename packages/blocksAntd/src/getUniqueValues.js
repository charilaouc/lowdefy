/*
  Copyright 2020 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { type } from '@lowdefy/helpers';

const getUniqueValues = (arr, key = 'value') => {
  const arr2 = arr.map((o) => {
    if (type.isPrimitive(o)) {
      return JSON.stringify(o);
    }
    return JSON.stringify(o[key]);
  });
  return arr.filter((opt, i) => {
    if (type.isPrimitive(opt)) {
      return arr2.indexOf(JSON.stringify(opt)) === i;
    }
    return arr2.indexOf(JSON.stringify(opt[key])) === i;
  });
};

export default getUniqueValues;
