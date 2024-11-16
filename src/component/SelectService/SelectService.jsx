import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { TestPhoto } from '../PhotoService/testData';

export default function SelectService() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        TestPhoto.getImages().then((data) => setSource(data));
    }, []);

    // Handle changes in the PickList
    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    // Template for displaying each item
    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img 
                    className="w-4rem shadow-2 flex-shrink-0 border-round" 
                    src={item.itemImageSrc} 
                    alt={item.alt} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} // 控制圖片大小
                />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-sm">{item.alt}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList 
                dataKey="itemImageSrc" // Unique key for items
                source={source} 
                target={target} 
                onChange={onChange} 
                itemTemplate={itemTemplate} 
                breakpoint="1280px"
                sourceHeader="Available Photos" 
                targetHeader="Selected Photos" 
                sourceStyle={{ height: '20rem', width: '100%' }} // 設定上下模式的寬高
                targetStyle={{ height: '20rem', width: '100%' }} 
                className="p-picklist-vertical" // 自定義的垂直模式
            />
        </div>
    );
}
