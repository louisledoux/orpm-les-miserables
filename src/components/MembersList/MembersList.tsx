import React from 'react';
import Typography from '@/components/Typography/Typography';

interface Member {
  firstName: string;
  lastName: string;
  instrument?: string;
}

interface StaffMember extends Member {
  role: string;
}

interface MembersListProps {
  title: string;
  members: (Member | StaffMember)[];
  type: 'troupe' | 'orchestra' | 'staff';
}

// eslint-disable-next-line react/function-component-definition
const MembersList: React.FC<MembersListProps> = ({ title, members, type }) => {
  const groupedMembers = type === 'staff'
    ? members.reduce((acc, member) => {
      const staffMember = member as StaffMember;
      if (!acc[staffMember.role]) {
        acc[staffMember.role] = [];
      }
      acc[staffMember.role].push(member);
      return acc;
    }, {} as Record<string, typeof members>)
    : { all: members };

  const sortedGroups = Object.keys(groupedMembers).sort();

  const createVerticalColumns = (items: typeof members) => {
    const normalizeName = (name: string) => name.replace(/^De /, 'De');
    const sortedItems = [...items].sort((a, b) => {
      const lastNameComparison = normalizeName(a.lastName).localeCompare(
        normalizeName(b.lastName),
        'fr',
      );
      return lastNameComparison !== 0
        ? lastNameComparison
        : a.firstName.localeCompare(b.firstName, 'fr');
    });
    const numColumns = 3;
    const itemsPerColumn = Math.ceil(sortedItems.length / numColumns);
    const columns: (typeof members)[] = Array.from(
      { length: numColumns },
      (_, i) => sortedItems.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn),
    );
    return columns;
  };

  return (
    <div className="w-full mb-60px">
      <Typography.Title level={2} className="mb-40px text-gray-800">
        {title}
      </Typography.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40px">
        {type === 'staff' ? (
          sortedGroups.map((role) => (
            <div key={role} className="bg-white p-20px">
              <Typography.Title level={3} className="mb-20px text-primary">
                {role}
              </Typography.Title>
              <ul className="space-y-10px">
                {groupedMembers[role]
                  .sort((a, b) => {
                    const normalizeName = (name: string) => name.replace(/^De /, 'De');
                    const lastNameComparison = normalizeName(
                      a.lastName,
                    ).localeCompare(normalizeName(b.lastName), 'fr');
                    return lastNameComparison !== 0
                      ? lastNameComparison
                      : a.firstName.localeCompare(b.firstName, 'fr');
                  })
                  .map((member) => (
                    <li key={`${member.lastName + member.firstName}1`} className="text-gray-600">
                      {member.lastName}
                      {' '}
                      {member.firstName}
                    </li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="col-span-full">
            <div className="bg-white p-20px">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40px">
                {createVerticalColumns(members).map((column, colIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ul key={`${colIndex}-columns`} className="space-y-20px mt-4 first:mt-0 md:even:mt-0 lg:mt-0">
                    {column.map((member) => (
                      <li key={`${member.lastName + member.firstName}2`} className="text-gray-600">
                        <div>
                          {member.lastName}
                          {' '}
                          {member.firstName}
                        </div>
                        {type === 'orchestra' && member.instrument && (
                          <div className="text-primary text-sm mt-2px">
                            {member.instrument}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersList;
